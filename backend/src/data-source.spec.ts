import { AppDataSource } from "./data-source";

describe("Database Connection", () => {
  beforeAll(async () => {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
    }
  });

  afterAll(async () => {
    if (AppDataSource.isInitialized) {
      await AppDataSource.destroy();
    }
  });

  it("should connect to database", () => {
    expect(AppDataSource.isInitialized).toBe(true);
  });
});
