const LoaderComponent = ({ size }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="border-5 border-darkBlue border-t-orange rounded-full animate-spin"
        style={{ width: size, height: size }}
      ></div>
      <span>Loading...</span>
    </div>
  );
};

export default LoaderComponent;
