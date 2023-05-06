import { useEffect } from "react";

const ComingSoon = ({ close }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      close();
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => {
      clearTimeout(timer);
    };
  }, [close]);
  return (
    <div className="coming-soon-container">
      <h2>Coming Soon</h2>
      <p>
        This feature is currently under development and will be available soon.
        Thank you for your patience.
      </p>
    </div>
  );
};

export default ComingSoon;
