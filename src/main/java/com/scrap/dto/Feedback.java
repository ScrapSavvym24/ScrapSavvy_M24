package com.scrap.dto;

public class Feedback {
    private String feedback;
    private String suggestion;

    // Default constructor
    public Feedback() {
    }

    // Parameterized constructor
    public Feedback(String feedback, String suggestion) {
        this.feedback = feedback;
        this.suggestion = suggestion;
    }

    // Getters and Setters
    public String getFeedback() {
        return feedback;
    }

    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }

    public String getSuggestion() {
        return suggestion;
    }

    public void setSuggestion(String suggestion) {
        this.suggestion = suggestion;
    }

    // toString method
    @Override
    public String toString() {
        return "Feedback{" +
                "feedback='" + feedback + '\'' +
                ", suggestion='" + suggestion + '\'' +
                '}';
    }
}

