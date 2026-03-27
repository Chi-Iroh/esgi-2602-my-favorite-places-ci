import { getDistance } from "../src/utils/getDistance"
import { describe, expect, test } from "@jest/globals";

describe("distance", () => {
    test("(50;50) -> (-10;-10) --> should ~ 8 831,87 km", () => {
        expect(getDistance({ lng: 50, lat: 50 }, { lng: -10, lat: -10 })).toBeCloseTo(8831.87)
    })
})