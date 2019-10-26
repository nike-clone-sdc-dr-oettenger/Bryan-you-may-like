import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  vus: 100,
  duration: "15s"
};

export default function() {
  let res = http.get("http://localhost:8081/shoes");
  check(res,{
    "WE DID IT!": (r) => r.status === 200
  });
};