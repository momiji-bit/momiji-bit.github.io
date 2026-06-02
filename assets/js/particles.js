(function () {
  var canvas = document.getElementById("particle-background");
  if (!canvas) {
    return;
  }

  var ctx = canvas.getContext("2d", { alpha: true });
  if (!ctx) {
    return;
  }

  var particles = [];
  var width = 0;
  var height = 0;
  var dpr = 1;
  var frameId = null;
  var pointer = { x: 0, y: 0, active: false };
  var prefersReducedMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var tones = [
    "rgba(116, 217, 255, ",
    "rgba(255, 209, 102, ",
    "rgba(168, 139, 250, "
  ];

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  function targetParticleCount() {
    var count = Math.floor((width * height) / 15000);
    return Math.max(32, Math.min(115, count));
  }

  function createParticle() {
    var angle = random(0, Math.PI * 2);
    var speed = random(0.06, 0.28);

    return {
      x: random(0, width),
      y: random(0, height),
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      radius: random(0.7, 2.1),
      alpha: random(0.35, 0.85),
      pulse: random(0, Math.PI * 2),
      tone: tones[Math.floor(Math.random() * tones.length)]
    };
  }

  function syncParticles() {
    var count = targetParticleCount();

    while (particles.length < count) {
      particles.push(createParticle());
    }

    if (particles.length > count) {
      particles.length = count;
    }
  }

  function resizeCanvas() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth || document.documentElement.clientWidth;
    height = window.innerHeight || document.documentElement.clientHeight;

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    syncParticles();
    draw(0);
  }

  function updateParticle(particle) {
    particle.x += particle.vx;
    particle.y += particle.vy;

    if (pointer.active) {
      var dx = pointer.x - particle.x;
      var dy = pointer.y - particle.y;
      var distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 0 && distance < 180) {
        var force = (1 - distance / 180) * 0.015;
        particle.vx += (dx / distance) * force;
        particle.vy += (dy / distance) * force;
      }
    }

    particle.vx *= 0.995;
    particle.vy *= 0.995;

    if (particle.x < -20) particle.x = width + 20;
    if (particle.x > width + 20) particle.x = -20;
    if (particle.y < -20) particle.y = height + 20;
    if (particle.y > height + 20) particle.y = -20;
  }

  function drawConnections() {
    var maxDistance = Math.min(150, Math.max(95, width / 12));

    for (var i = 0; i < particles.length; i += 1) {
      for (var j = i + 1; j < particles.length; j += 1) {
        var first = particles[i];
        var second = particles[j];
        var dx = first.x - second.x;
        var dy = first.y - second.y;
        var distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < maxDistance) {
          var opacity = (1 - distance / maxDistance) * 0.18;
          ctx.strokeStyle = "rgba(116, 217, 255, " + opacity + ")";
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.moveTo(first.x, first.y);
          ctx.lineTo(second.x, second.y);
          ctx.stroke();
        }
      }
    }
  }

  function draw(time) {
    ctx.clearRect(0, 0, width, height);

    if (!prefersReducedMotion) {
      particles.forEach(updateParticle);
    }

    drawConnections();

    particles.forEach(function (particle) {
      var pulse = prefersReducedMotion ? 0 : Math.sin(time * 0.0018 + particle.pulse) * 0.22;
      var alpha = Math.max(0.12, Math.min(0.95, particle.alpha + pulse));

      ctx.beginPath();
      ctx.fillStyle = particle.tone + alpha + ")";
      ctx.shadowBlur = 14;
      ctx.shadowColor = particle.tone + "0.8)";
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.shadowBlur = 0;
  }

  function animate(time) {
    draw(time || 0);
    frameId = window.requestAnimationFrame(animate);
  }

  function start() {
    if (prefersReducedMotion) {
      draw(0);
      return;
    }

    if (frameId === null) {
      frameId = window.requestAnimationFrame(animate);
    }
  }

  function stop() {
    if (frameId !== null) {
      window.cancelAnimationFrame(frameId);
      frameId = null;
    }
  }

  window.addEventListener("resize", resizeCanvas);
  window.addEventListener("mousemove", function (event) {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.active = true;
  });
  window.addEventListener("mouseout", function () {
    pointer.active = false;
  });
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      stop();
    } else {
      start();
    }
  });

  resizeCanvas();
  start();
}());
