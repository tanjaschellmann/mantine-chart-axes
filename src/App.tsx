import { BarChart } from "@mantine/charts";
import { MantineProvider, Stack } from "@mantine/core";
import "@mantine/core/styles.css";

const data = [
  { month: "January", Smartphones: 1200, Laptops: 900, Tablets: 200 },
  { month: "February", Smartphones: 1900, Laptops: 1200, Tablets: 400 },
  { month: "March", Smartphones: 400, Laptops: 1000, Tablets: 200 },
  {
    month: "April is the forth month of the year",
    Smartphones: 1000,
    Laptops: 200,
    Tablets: 800,
  },
  {
    month: "May is the fifth month of the year",
    Smartphones: 800,
    Laptops: 1400,
    Tablets: 1200,
  },
  {
    month: "June is the sisth month of the year",
    Smartphones: 750,
    Laptops: 600,
    Tablets: 1000,
  },
  { month: "July", Smartphones: 750, Laptops: 600, Tablets: 1000 },
  { month: "August", Smartphones: 830, Laptops: 500, Tablets: 1000 },
];

function App() {
  return (
    <MantineProvider>
      <Stack gap="md">
        <BarChart
          data={data}
          dataKey="month"
          h={500}
          mx="xl"
          series={[
            { name: "Smartphones", color: "violet.6" },
            { name: "Laptops", color: "blue.6" },
            { name: "Tablets", color: "teal.6" },
          ]}
          w={1000}
          xAxisLabel="Month of the year"
          xAxisProps={{ interval: 0, angle: 90, textAnchor: "start" }}
          yAxisLabel="Amount of the specific device"
        />
        <BarChart
          data={data}
          dataKey="month"
          h={500}
          m="xl"
          series={[
            { name: "Smartphones", color: "violet.6" },
            { name: "Laptops", color: "blue.6" },
            { name: "Tablets", color: "teal.6" },
          ]}
          w={1000}
          xAxisLabel="Month of the year"
          xAxisProps={{ interval: 0 }}
          yAxisLabel="Amount of the specific device"
        />
      </Stack>
    </MantineProvider>
  );
}

export default App;
