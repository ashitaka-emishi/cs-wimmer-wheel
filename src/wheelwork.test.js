import Wheelwork from "./wheelwork";

describe("Wheelwork", () => {
    it("Validates constructor args", () => {
        expect(() => { new Wheelwork(15,12); }).toThrow("Torch 1");
        expect(() => { new Wheelwork(-2,12); }).toThrow("Torch 1");
        expect(() => { new Wheelwork(5,-3); }).toThrow("Torch 2");
        expect(() => { new Wheelwork(0,14); }).toThrow("Torch 2");
        expect(() => { new Wheelwork(4,4); }).toThrow("same position");
    });

    it("It calculates base concepts", () => {
        [
            { t1: 2, t2: 10, concept: "52/53" },
            { t1: 1, t2: 9, concept: "44/61" },
            { t1: 9, t2: 1, concept: "44/61" },
            { t1: 8, t2: 10, concept: "19/86" },
            { t1: 3, t2: 4, concept: "4/101" },
            { t1: 2, t2: 6, concept: "18/87" },
            { t1: 4, t2: 7, concept: "18/87" },

        ].forEach((testData) => {
            const w = new Wheelwork(testData.t1, testData.t2);
            expect(w.concept).toBe(testData.concept);
        });
    });

    it("It calculates full concepts", () => {
        [
            { t1: 2, t2: 10, concept: "52/53" },
            { t1: 1, t2: 9, concept: "44/61" },
            { t1: 2, t2: 6, concept: "18/87 B" },
            { t1: 4, t2: 7, concept: "18/87 A" },
            { t1: 2, t2: 9, concept: "42/63 E" },
            { t1: 2, t2: 11, concept: "42/63 D" },
            { t1: 5, t2: 12, concept: "42/63 C" },
            { t1: 7, t2: 13, concept: "42/63 B" },
            { t1: 8, t2: 12, concept: "42/63 A" }

        ].forEach((testData) => {
            const w = new Wheelwork(testData.t1, testData.t2);
            expect(w.getFullConcept()).toBe(testData.concept);
        });
    });

    it("Finds wheels", () => {
        [
            { c1: 18, c2: 87, t1: [2,4], t2: [6,7]},
            { c1: 4, c2: 101, t1: [3], t2: [4]},
            { c1: 42, c2: 63, t1: [2, 2, 5, 7, 8], t2: [9, 11, 12, 13, 12]},
            { c1: 41, c2: 64, t1: [], t2: []}
        ].forEach((testData) => {
            const w = Wheelwork.findWheels(testData.c1, testData.c2);
            expect(w.length).toBe(testData.t1.length);
            for(var i=0; i < w.length; i++) {
                expect(w[i].t1).toBe(testData.t1[i]);
                expect(w[i].t2).toBe(testData.t2[i]);
            }
        });
    });


    it("Gets all concepts", () => {
        const wheels = Wheelwork.getAllConcepts();
        expect(wheels.length).toBe(97);
        expect(wheels[0].getFullConcept()).toBe("52/53");
        expect(wheels[9].concept).toBe("47/58");
        expect(wheels[9].getFullConcept).toBeUndefined();
        expect(wheels[16].concept).toBe("43/62");
        expect(wheels[16].getFullConcept).toBeUndefined();
        expect(wheels[93].getFullConcept()).toBe("3/102 A");
        expect(wheels[96].getFullConcept()).toBe("1/104");
    });
});
