import resources from "../pages/api/resources/[id]";

const { client, clientPromise } = jest.requireActual(
  "../__mocks__/mockMongoDB.js"
);

const res = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};

const req = {
  method: "GET",
  query: { id: 1 },
};

const exampleResources = [
  {
    _id: 1,
    id: 1,
    name: "shoe",
    active: 1,
    image: "shoe.jpg",
  },
  {
    _id: 2,
    id: 2,
    name: "shoe2",
    active: 1,
    image: "shoe2.jpg",
  },
];

describe("resources", () => {
  beforeAll(async () => {
    const db = client.db("emily-website-next");
    const collection = db.collection("resources");

    await collection.insertMany(exampleResources);
  });
  it("should return one resource", async () => {
    await resources(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(exampleResources[0]);
  });
  it("should return an empty array", async () => {
    const query = { id: 3 };
    await resources({ ...req, query }, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: "Resource not found" });
  });
  it("should return with a status of 405", async () => {
    await resources({ method: "PUT" }, res);
    expect(res.status).toHaveBeenCalledWith(405);
  });
});
