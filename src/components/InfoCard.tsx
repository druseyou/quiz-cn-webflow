import { ReactNode } from "react";

interface InfoCardProps {
  children: ReactNode;
  withQuotes?: boolean;
}

const InfoCard = ({ children, withQuotes = false }: InfoCardProps) => {
  return (
    <div className="relative w-full bg-primary-dark/30 rounded-2xl">
      {withQuotes && (
        <>
          <span className="absolute left-2 top-0 text-5xl text-text-primary opacity-20 leading-none">{'"'}</span>
          <span className="absolute right-2 bottom-0 text-5xl text-text-primary opacity-20 leading-none">{'"'}</span>
        </>
      )}
      <div className="px-6 py-4 text-text-primary text-sm leading-5 relative z-10">
        {children}
      </div>
    </div>
  );
};

export default InfoCard;

