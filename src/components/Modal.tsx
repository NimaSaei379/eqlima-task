function Modal({
  isOpen,
  children,
  className,
}: {
  isOpen: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`${
        isOpen ? "flex visible opacity-100" : "hidden invisible opacity-0"
      }  w-full h-full bg-black bg-opacity-50  z-50 items-end sm:justify-center sm:items-center transition-all ease-in absolute  duration-400`}
    >
      <div
        className={`w-full h-3/4 sm:w-96 bg-primary3 rounded-md shadow-lg transform ease-in transition-transform delay-700 duration-700 ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }${className}`}
      >
        {children}
      </div>
    </div>
  );
}

export default Modal;
