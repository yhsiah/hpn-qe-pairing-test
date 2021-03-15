# Hopin QE Test Automation Pairing Exercise

## Intro

This is the technical assessment for QE roles at Hopin.

It is a live tech test, where we will be pair programming to set up and automate a simple user flow. The candidate will be driving, and Hopin Interviewer will taking the backseat, asking questions and offering assistance if needed.

Treat this as if it was a normal pairing session in the role. You are more than welcome to look things up, ask questions, etc. We do not expect you to know or remember everything, as it is not a memory test - we are more interested in how you work and how you think.

We do not strictly expect you to finish writing the test completely.

## Steps

1. Clone the repo
2. install dependencies with `yarn` (if using Testcafe of Cypress)
3. create a new branch named `candidate/firstName-lastName`
4. create the tests for this exercise
5. push the branch to origin


## The Automation Task

We want you to create an automated test for the following:

>Search for an event on https://hopin.com/explore and check that it shows up correctly in the results, then click the event result and check that it opens as expected.

## Tooling

You can use any tooling you wish.

However, in general, we prefer JS automation frameworks like Testcafe, Cypress or Webdriverio.

We have provided initial setups for Testcafe and Cypress.