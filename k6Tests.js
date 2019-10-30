import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  vus: 25,
  duration: "210s",
  rps: 100
};

export default function() {
  let res = http.get("http://localhost:8081/shoes");
  check(res,{
    "WE DID IT!": (r) => r.status === 200
  });
};