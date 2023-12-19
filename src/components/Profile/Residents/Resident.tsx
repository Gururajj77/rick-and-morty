import { useQuery } from "@tanstack/react-query";
import { getResidents } from "./Utils/residentsCustomFunctions";

type ResidentProps = {
  residentCountUrl: string;
};

const Resident = ({ residentCountUrl }: ResidentProps) => {
  const { data } = useQuery({
    queryKey: ["residents"],
    queryFn: () => getResidents(residentCountUrl),
  });

  return <div>Resident Count: {data?.["residents"].length}</div>;
};

export default Resident;
