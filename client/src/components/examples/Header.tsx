import Header from "../Header";

export default function HeaderExample() {
  return (
    <Header
      onNavClick={(section) => console.log("Navigate to:", section)}
    />
  );
}
