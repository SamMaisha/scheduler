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
    // click on the 'delete' button for the booked appointment
    const appointment = getAllByTestId(container, "appointment").find(
      (appointment) => queryByText(appointment, "Archie Cohen")
    );
    fireEvent.click(getByAltText(appointment, "Delete"));
    // check that confirmation message is shown
    expect(
      getByText(appointment, /are you sure you would like to delete/i)
    ).toBeInTheDocument();
    // click on 'confirm' button to cancel appointment
    fireEvent.click(getByText(appointment, "Confirm"));
    // check that the element with text 'deleting' is displayed
    expect(getByText(appointment, "Deleting")).toBeInTheDocument();
    // wait until the element with the 'add' button shows up on the appointment
    await waitForElement(() => getByAltText(appointment, "Add"));
    // check with the DayListItem with text 'Monday' has text '2 spots remaining'
    const day = getAllByTestId(container, "day").find((day) =>
      queryByText(day, "Monday")
    );
    expect(getByText(day, "2 spots remaining")).toBeInTheDocument();
  });
});

it("loads data, edits an interview and keeps the spots remaining for Monday the same", async () => {
  // render the application
  const { container } = render(<Application />);
  // wait until appointments load; check for text 'Archie Cohen' being displayed
  await waitForElement(() => getByText(container, "Archie Cohen"));
  // click on the 'edit' button for booked appointment
  const appointment = getAllByTestId(container, "appointment").find(
    (appointment) => queryByText(appointment, "Archie Cohen")
  );
  fireEvent.click(getByAltText(appointment, "Edit"));
  // check that form appears with the student name and interviewer selected
  expect(getByPlaceholderText(appointment, /enter student name/i)).toHaveValue(
    "Archie Cohen"
  );
  expect(getByText(appointment, "Tori Malcolm")).toBeInTheDocument();
  // change information on the form
  fireEvent.change(getByPlaceholderText(appointment, /enter student name/i), {
    target: { value: "Lydia Miller-Jones" },
  });
  fireEvent.click(getByAltText(appointment, "Sylvia Palmer"));
  // click on 'save' button to save changes
  fireEvent.click(getByText(appointment, "Save"));
  // check that the element with the text 'Saving' is shown
  expect(getByText(appointment, "Saving")).toBeInTheDocument();
  // check that appointment reflects the updated information
  // check that the DayList Item with text Monday has text '1 spot remaining'
  console.log(prettyDOM(appointment));
});

// it("shows the save error when failing to save an appointment");

// it("shows the delete error when failing to delete an existing appointment");
