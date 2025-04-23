'use strict';

import {Point3D} from './Point3D.mjs';


test('Test 4. instance variables of Point3D are correct', () => {
    const p = new Point3D(1, 2, 3);
    expect(p.x).toBe(1);
    expect(p.y).toBe(2);
    expect(p.z).toBe(3);
});

test('Test 5. Distance calculation is correct for Point3D', () => {
    const p1 = new Point3D(1, 2, 3);
    const p2 = new Point3D(0, 0, 0)
    const distance1 = p1.distanceFrom(p2);
    expect(distance1.toFixed(5)).toBe('3.74166');
    // Distance calculation must be symmetric
    const distance2 = p2.distanceFrom(p1);
    expect(distance1).toBe(distance2);
});


test('Test 6. Distance calculation is correct for Point3D', () => {
    const p1 = new Point3D(1, 2, 3);
    const p2 = new Point3D(3, 4, -5);
    const distance1 = p1.distanceFrom(p2);
    expect(distance1.toFixed(5)).toBe('8.48528');
    // Distance calculation should be symmetric
    const distance2 = p2.distanceFrom(p1);
    expect(distance1).toBe(distance2);
});
