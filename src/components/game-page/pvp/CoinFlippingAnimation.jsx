import React from "react";

function CoinFlippingAnimation() {
  const [isFlipping, setIsFlipping] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsFlipping(false);
    }, 3000); // Wait for 3 seconds before stopping the animation

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="spinningasset coin animate-fadein">
      <div>
        <div></div>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <em></em>
        <em></em>
        <div></div>
      </div>
    </div>
  );
}

export default CoinFlippingAnimation;
