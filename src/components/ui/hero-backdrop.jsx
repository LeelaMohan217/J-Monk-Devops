import { useEffect, useRef, useSyncExternalStore } from "react";

const THREAD_COUNT = 11;

function subscribeTheme(callback) {
  const mq = window.matchMedia("(prefers-color-scheme: light)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getThemeSnapshot() {
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}

function getThemeServerSnapshot() {
  return "dark";
}

function subscribeMotion(callback) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}

function getMotionSnapshot() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function getMotionServerSnapshot() {
  return false;
}

export function HeroBackdrop() {
  const canvasRef = useRef(null);
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getThemeServerSnapshot);
  const reducedMotion = useSyncExternalStore(subscribeMotion, getMotionSnapshot, getMotionServerSnapshot);

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let threads = [];
    let frameId = 0;

    function buildThreads() {
      threads = Array.from({ length: THREAD_COUNT }, (_, i) => ({
        baseY: height * (0.08 + (i / (THREAD_COUNT - 1)) * 0.88),
        amp: 34 + Math.random() * 60,
        freq: 0.55 + Math.random() * 0.85,
        phase: Math.random() * Math.PI * 2,
        speed: 0.12 + Math.random() * 0.22,
        opacity: 0.18 + Math.random() * 0.32,
      }));
    }

    function resize() {
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildThreads();
    }

    const lineColor = theme === "light" ? "185, 28, 28" : "239, 68, 68";
    const opacityScale = theme === "light" ? 0.6 : 1;

    function draw(t) {
      ctx.clearRect(0, 0, width, height);
      threads.forEach((th) => {
        ctx.beginPath();
        const grad = ctx.createLinearGradient(0, 0, width, 0);
        grad.addColorStop(0, `rgba(${lineColor}, 0)`);
        grad.addColorStop(0.5, `rgba(${lineColor}, ${th.opacity * opacityScale})`);
        grad.addColorStop(1, `rgba(${lineColor}, 0)`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.6;
        for (let x = 0; x <= width; x += 8) {
          const y = th.baseY + Math.sin(x * 0.004 * th.freq + th.phase + t * 0.00055 * th.speed) * th.amp;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      });
    }

    function loop(t) {
      draw(t);
      frameId = requestAnimationFrame(loop);
    }

    function startLoop() {
      if (frameId || reducedMotion) return;
      frameId = requestAnimationFrame(loop);
    }

    function stopLoop() {
      if (frameId) {
        cancelAnimationFrame(frameId);
        frameId = 0;
      }
    }

    const onResize = () => resize();
    window.addEventListener("resize", onResize);
    resize();
    draw(0);

    let observer;
    if (!reducedMotion) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) startLoop();
          else stopLoop();
        },
        { threshold: 0 },
      );
      observer.observe(parent);
    }

    return () => {
      window.removeEventListener("resize", onResize);
      observer?.disconnect();
      stopLoop();
    };
  }, [theme, reducedMotion]);

  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
}
