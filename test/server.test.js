// test/server.test.js
import { expect, use } from "chai";
import chaiHttp from "chai-http";
import server from "../server.mjs"; // Ensure the path is correct

use(chaiHttp);

describe("GET /", () => {
  it("should return Hello, World!", (done) => {
    chai
      .request(server)
      .get("/")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.equal("Hello, World!");
        done();
      });
  });
});
