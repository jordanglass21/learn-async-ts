const aliceTumbling1: Keyframe[] = [
  { transform: 'rotate(0) scale(1)' },
  { transform: 'rotate(360deg) scale(0)' }
];

const aliceTiming1: KeyframeEffectOptions = {
  duration: 2000,
  iterations: 1,
  fill: 'forwards'
};

const alice10 = document.querySelector<HTMLElement>("#alice1");
const alice20 = document.querySelector<HTMLElement>("#alice2");
const alice30 = document.querySelector<HTMLElement>("#alice3");

async function animateAlice() {
  if (!alice10 || !alice20 || !alice30) {
    console.warn("#alice elements not found");
    return;
  }

  try {
    // Wait for each animation to finish before starting the next
    await alice10.animate(aliceTumbling1, aliceTiming1).finished;
    await alice20.animate(aliceTumbling1, aliceTiming1).finished;
    await alice30.animate(aliceTumbling1, aliceTiming1).finished;
  } catch (err) {
    if (err instanceof Error) {
      alert(`Error during animation: ${err.message}`);
    } else {
      alert(`An unknown error occurred.`);
    }
  }  
}

// Run animation after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", animateAlice);