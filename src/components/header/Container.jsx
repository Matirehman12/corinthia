import clsx from "clsx";

const Container = ({ className, ...props }) => {
  return (
    <div
      className={clsx(
        // "max-w-screen-xxl mx-auto px-4 sm:px-6 lg:px-16 lg:pe-52",
        "max-w-screen-xxl mx-auto px-4 sm:px-6 lg:px-10 2xl:px-16 lg:ps-0 xl:pe-32 2xl:pe-52",

        className
      )}
      {...props}
    />
  );
};

export default Container;
