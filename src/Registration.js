const Registration = () => {
  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input id="name" type="name" name="name" size="32" />
      <label htmlFor="surname">Surname:</label>
      <input id="surname" type="surname" name="surname" size="32" />
      <label htmlFor="email">Email:</label>
      <input id="email" type="email" name="email" size="32" />
      <label htmlFor="password">Password:</label>
      <input id="password" type="password" name="password" size="32" />
    </form>
  );
};

export default Registration 