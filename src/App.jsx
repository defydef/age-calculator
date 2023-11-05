import { AgeProvider } from "./contexts/AgeContext";
import AgeDisplay from "./ui/AgeDisplay";
import Box from "./ui/Box";
import DateInputGroup from "./ui/DateInputGroup";
import Line from "./ui/Line";
import LineButton from "./ui/LineButton";
import MainContainer from "./ui/MainContainer";
import SubmitButton from "./ui/SubmitButton";

function App() {
  return (
    <MainContainer>
      <Box>
        <AgeProvider>
          <DateInputGroup />
          <LineButton>
            <Line />
            <SubmitButton />
          </LineButton>
          <AgeDisplay />
        </AgeProvider>
      </Box>
    </MainContainer>
  );
}

export default App;
