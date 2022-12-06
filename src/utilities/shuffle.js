import citizen from "../assets/citizen.svg";
import courtesan from "../assets/courtesan.svg";
import detective from "../assets/detective.svg";
import doctor from "../assets/doctor.svg";
import judge from "../assets/judge.svg";
import mafia from "../assets/mafia.svg";
import maniac from "../assets/maniac.svg";
import sheriff from "../assets/sheriff.svg";

const shuffle = () => {
  const assets = [
    { image: citizen },
    { image: courtesan },
    { image: detective },
    { image: doctor },
    { image: judge },
    { image: mafia },
    { image: maniac },
    { image: sheriff },
  ];
  return [...assets, ...assets]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }));
};

export default shuffle;
