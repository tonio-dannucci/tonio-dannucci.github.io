export const Footer = () => {
  return (
    <>
      <footer className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl space-y-8 overflow-hidden px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center text-xl text-gray-600">
            <p>
              <span className="font-bold">Tonio d&apos;Annucci</span>
            </p>
          </div>

          <p className="mt-8 text-center text-base leading-6 text-gray-400">
            Copyright &copy; 1995 - {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </>
  );
};
