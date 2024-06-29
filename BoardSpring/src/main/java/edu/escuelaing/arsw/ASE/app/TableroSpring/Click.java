package edu.escuelaing.arsw.ASE.app.TableroSpring;

/**
 * Represents a mouse click data object.
 */
public class Click {
    private String color;
    private float x;
    private float y;
    private long timestamp;

    public float getX() {
        return x;
    }

    public void setX(float x) {
        this.x = x;
    }

    public float getY() {
        return y;
    }

    public void setY(float y) {
        this.y = y;
    }

    public long getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(long timestamp) {
        this.timestamp = timestamp;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }
}
