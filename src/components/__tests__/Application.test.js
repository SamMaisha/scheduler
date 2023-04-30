import React from "react";
import {
  render,
  cleanup,
  waitForElement,
  fireEvent,
  getByText,
  prettyDOM,
  getAllByTestId,
  getByAltText,
  getByPlaceholderText,
  queryByText,
} from "@testing-library/react";
import Application from "components/Application";

afterEach(cleanup);

describe("Application", () => {
  it("defaults to Monday and changes the schedule when a new day is selected", () => {
    const { getByText } = render(<Application />);

    return waitForElement(() => getByText("Monday")).then(() => {
      fireEvent.click(getByText("Tuesday"));
      expect(getByText("Leopold Silvers")).toBeInTheDocument();
    });
  });

  it("loads data, books an interview and reduces the spots remaining for the first day by 1", async () => {
    const { container, debug } = render(<Application />);

    await waitForElement(() => getByText(container, "Archie Cohen"));

    const appointments = getAllByTestId(container, "appointment");
    const appointment = appointments[0];

    fireEvent.click(getByAltText(appointment, "Add"));

    fireEvent.change(getByPlaceholderText(appointment, /enter student name/i), {
      target: { value: "Lydia Miller-Jones" },
    });

    fireEvent.click(getByAltText(appointment, "Sylvia Palmer"));
    fireEvent.click(getByText(appointment, "Save"));

    expect(getByText(appointment, "Saving")).toBeInTheDocument();

    await waitForElement(() => getByText(appointment, "Lydia Miller-Jones"));

    const day = getAllByTestId(container, "day").find((day) =>
      queryByText(day, "Monday")
    );

    expect(getByText(day, "no spots remaining")).toBeInTheDocument();
  });

  it("loads data, cancels and interview and increases the spots remaining for Monday by 1", async () => {
    // render the application
    const { container } = render(<Application />);
    // wait until appointments load; test 'Archie Cohen' is displayed
    await waitForElement(() => getByText(container, "Archie Cohen"));
    // appointments array
    const appointments = getAllByTestId(container, "appointment");
    // get first booked appointment for Monday
    const appointment = appointments[1];
    // click on the 'delete' button on the booked appointment
    fireEvent.click(getByAltText(appointment, "Delete"));
    // expect confirmation message is shown
    expect(
      getByText(appointment, /are you sure you would like to delete/i)
    ).toBeInTheDocument();
    // click on 'confirm' button to cancel appointment
    fireEvent.click(getByText(appointment, "Confirm"));
    // check that the element with text 'deleting' is displayed
    // wait until the element with the 'add' button shows up on the appointment
    // check with the DayListItem with text 'Monday' has text '2 spots remaining'

    console.log(prettyDOM(appointment));
  });
});
