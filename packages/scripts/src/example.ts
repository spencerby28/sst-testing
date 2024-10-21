import { Resource } from "sst";
import { Example } from "@sst-testing/core/example";

console.log(`${Example.hello()} Linked to ${Resource.MyBucket.name}.`);
