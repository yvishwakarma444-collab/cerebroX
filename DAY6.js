import React from "react";
import HelloUser from "../components/HelloUser";
import ProfileCard from "../components/ProfileCard";

function App() {
const App = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <HelloUser name="Rahul" />
      <HelloUser name="Sam" />
      <HelloUser />{" "}
      {/* This will show "Hello, Guest!" because of the default prop */}
    <div>
      <h1 style={{ textAlign: "center" }}>Meet Our Team</h1>
      <ProfileCard
        name="Rahul"
        image="https://randomuser.me/api/portraits/men/1.jpg"
      >
        React Developer | Loves JavaScript 🚀
      </ProfileCard>

      <ProfileCard
        name="Sara"
        image="https://randomuser.me/api/portraits/women/2.jpg"
      >
        Frontend Engineer | UI/UX Enthusiast 🎨
      </ProfileCard>
    </div>