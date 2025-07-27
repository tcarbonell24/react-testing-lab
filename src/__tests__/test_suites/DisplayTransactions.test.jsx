import { render, screen, waitFor } from "@testing-library/react";
import App from "../../components/App";

test("displays at least one transaction from db.json on startup", async () => {
  render(<App />);
  
  await waitFor(() => {
    const matches = screen.getAllByText(/Paycheck from Bob's Burgers/i);
    expect(matches.length).toBeGreaterThan(0);
  });
});
