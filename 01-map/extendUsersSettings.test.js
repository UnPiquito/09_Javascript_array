import extendUsersSettings from "./extendUsersSettings.js";
describe("Given extendUsersSettings function", () => {
  test("When an array of strings is given, then an array with the new properties should be returned ", () => {
    const users = [
      {
        email: "lindsay.ferguson@reqres.in",
        firstName: "Lindsay",
        lastName: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
      },
      {
        email: "michael.lawson@reqres.in",
        firstName: "Michael",
        lastName: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
      },
      {
        email: "tobias.funke@reqres.in",
        firstName: "Tobias",
        lastName: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg",
      },
    ];
    const result = [
      {
        email: "lindsay.ferguson@reqres.in",
        firstName: "Lindsay",
        lastName: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
        id: 0,
        isEnabled: true,
      },
      {
        email: "michael.lawson@reqres.in",
        firstName: "Michael",
        lastName: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
        id: 1,
        isEnabled: true,
      },
      {
        email: "tobias.funke@reqres.in",
        firstName: "Tobias",
        lastName: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg",
        id: 2,
        isEnabled: true,
      },
    ];

    const userUpdate = extendUsersSettings(users);

    expect(userUpdate).toEqual(result);
  });
});
