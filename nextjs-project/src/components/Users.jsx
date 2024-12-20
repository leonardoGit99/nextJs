"use client"
import { useEffect } from "react";

export default function Users() {
  useEffect(() => {
    alert('loaded');
  }, []);
  return (
    <div>Users</div>
  );
}