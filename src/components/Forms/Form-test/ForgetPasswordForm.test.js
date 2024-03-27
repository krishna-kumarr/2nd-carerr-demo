import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from 'react-router-dom'
import { act } from 'react-dom/test-utils';
import '@testing-library/jest-dom'
import React from 'react';
import App from "../../../App";

describe("Login Test cases", () => {

  //global router
  const renderWithRouter = (ui, { route = '/' } = {}) => {
    window.history.pushState({}, 'Test page', route)

    return {
      user: userEvent,
      ...render(ui, { wrapper: BrowserRouter }),
    }
  }


  test("check availability",()=>{
    renderWithRouter(<App/>)

    expect(screen.getByText(/Change your Password/i)).toBeInTheDocument();
    expect(screen.getByTestId("forgot-email")).toBeInTheDocument();
    expect(screen.getByTestId("forgot-password")).toBeInTheDocument();
    expect(screen.getByTestId("forgot-confirm-password")).toBeInTheDocument();
    expect(screen.getByTestId("forgot-submit-button")).toBeInTheDocument();
  })


  test("check availability",()=>{
    renderWithRouter(<App/>)

    expect(screen.getByText(/Change your Password/i)).toBeInTheDocument();
    expect(screen.getByTestId("forgot-email")).toBeInTheDocument();
    expect(screen.getByTestId("forgot-email")).toBeDisabled();
    expect(screen.getByTestId("forgot-password").value).toBe('');
    expect(screen.getByTestId("forgot-confirm-password").value).toBe(''); 
  })


  test("password required",()=>{
    renderWithRouter(<App/>)
    fireEvent.change(screen.getByTestId("forgot-password"), { target : { value : "password@123"}})
    expect(screen.getByTestId("forgot-password").value).toBe('password@123');
    expect(screen.getByTestId("forgot-confirm-password").value).toBe(''); 

    act(()=>{
        fireEvent.click(screen.getByTestId("forgot-submit-button"))
    })
    expect(screen.getByText(/Please enter confirm password./i)).toBeInTheDocument();
  })


  test("password required",()=>{
    renderWithRouter(<App/>)

    expect(screen.getByTestId("forgot-password").value).toBe('');
    fireEvent.change(screen.getByTestId("forgot-confirm-password"), { target : { value : "password@123"}})
    expect(screen.getByTestId("forgot-confirm-password").value).not.toBe(''); 

    act(()=>{
        fireEvent.click(screen.getByTestId("forgot-submit-button"))
    })
    expect(screen.getByText(/Please enter your new password./i)).toBeInTheDocument();
  })


  test("password and confirm password does not matching",()=>{
    renderWithRouter(<App/>)

    fireEvent.change(screen.getByTestId("forgot-password"), { target : { value : "password"}})
    expect(screen.getByTestId("forgot-password").value).not.toBe('');
    fireEvent.change(screen.getByTestId("forgot-confirm-password"), { target : { value : "password@123"}})
    expect(screen.getByTestId("forgot-confirm-password").value).not.toBe(''); 

    act(()=>{
        fireEvent.click(screen.getByTestId("forgot-submit-button"))
    })
    expect(screen.getByTestId("forgot-confirm-password").value).not.toEqual(screen.getByTestId("forgot-password").value)
    expect(screen.getByText(/password and confirm password are not matching/i)).toBeInTheDocument();
  })


  test("password and confirm password are matching",()=>{
    renderWithRouter(<App/>)

    fireEvent.change(screen.getByTestId("forgot-password"), { target : { value : "password@123"}})
    expect(screen.getByTestId("forgot-password").value).not.toBe('');
    fireEvent.change(screen.getByTestId("forgot-confirm-password"), { target : { value : "password@123"}})
    expect(screen.getByTestId("forgot-confirm-password").value).not.toBe(''); 

    act(()=>{
        fireEvent.click(screen.getByTestId("forgot-submit-button"))
    })

    expect(screen.getByTestId("forgot-confirm-password").value).toEqual(screen.getByTestId("forgot-password").value)
  })
})