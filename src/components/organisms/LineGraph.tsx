import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useQuery } from "react-query";

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineGraph(): JSX.Element {
  const fetchData = async () => {
    const response = await fetch(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
    );
    const data = await response.json();
    return data;
  };

  const { data, isLoading, error } = useQuery("covidData", fetchData);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div>Error: {(error as Error)?.message}</div>;
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "COVID-19 Cases, Deaths, and Recoveries ",
      },
    },
  };

  const chartData = {
    labels: Object.keys(data?.cases),
    datasets: [
      {
        label: "Total Cases",
        data: Object.values(data?.cases),
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,1)",
      },
      {
        label: "Total Deaths",
        data: Object.values(data?.deaths),
        fill: false,
        borderColor: "rgba(192,75,75,1)",
        backgroundColor: "rgba(192,75,75,1)",
      },
      {
        label: "Total Recovered",
        data: Object.values(data?.recovered),
        fill: false,
        borderColor: "rgba(75,192,75,1)",
        backgroundColor: "rgba(75,192,75,1)",
      },
    ],
  };

  return (
    <>
      <Line
        className="border border-black bg-white  m-auto w-10/12  flex "
        data={chartData}
        options={options}
      />
    </>
  );
}
