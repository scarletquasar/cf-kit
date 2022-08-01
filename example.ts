import { cf } from "./core/cf";
const { Builder } = cf;

const myCfBuilder = new Builder();

myCfBuilder.setTemplateFormatVersion("2010-09-09");
myCfBuilder.addResource("Test", {});
myCfBuilder.addParameter("Test", {});

console.log(myCfBuilder.build());