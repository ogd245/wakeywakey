interface RevealContentProps {
  gifUrl: string;
  message: string;
}

const RevealContent = ({ gifUrl, message }: RevealContentProps) => {
  return (
    <div className="reveal-animation flex flex-col items-center gap-6 mt-12">
      <div className="float-animation">
        <img 
          src={gifUrl} 
          alt="Celebration" 
          className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-lg"
        />
      </div>
      <p className="cute-text text-5xl md:text-6xl lg:text-7xl text-center whitespace-pre-line">
        {message}
      </p>
    </div>
  );
};

export default RevealContent;
