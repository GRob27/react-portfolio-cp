import React, { Suspense } from "react";
import Lottie from "react-lottie";
import Loading from "../../containers/loading/Loading";

const DisplayLottie = (props: { animationData: any }) => {
  const animationData = props.animationData;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  return (
    <Suspense fallback={<Loading />}>
      {/* To override default onClick pause by Lottie */}
      <div onClick={() => ""}>
        <Lottie options={defaultOptions} />
      </div>
    </Suspense>
  );
};

export default DisplayLottie;
