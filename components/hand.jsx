"use client";

import { useEffect, useState } from "react";

function MyComponent() {
  const [ip, setIp] = useState("");

  useEffect(() => {
    fetch("/api/ip")
      .then((response) => response.json())
      .then((data) => setIp(data.ip));
  }, []);

  return <div style={{ color: "red" }}>IP адрес пользователя: {ip}</div>;
}

export default MyComponent;
