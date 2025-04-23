/*
 * Stephen Zulauf- zulaufs@wsu.edu
 */
import { Point2D } from "./Point2D.mjs";

class Point3D extends Point2D {
  /**
   *
   * @param {number} x The x-coordinate of the point
   * @param {number} y The y-coordinate of the point
   * @param {number} z The z-coordinate of the point
   */
  constructor(x, y, z) {
    super(x, y);
    this.z = z;
  }

  /**
   *
   * @param {object} p An instance of the class Point3Dim
   * @returns The Euclidean distance between this point and p
   */
  distanceFrom(p) {
    return Math.sqrt(
      Math.pow(this.x - p.x, 2) +
        Math.pow(this.y - p.y, 2) +
        Math.pow(this.z - p.z, 2)
    );
  }
}

export { Point3D };
