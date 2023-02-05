import { useState } from "react";

// Less code (c)
// Better validation
// Better Erros (set, clear, display)
// Have control over inputs
// Dont deal with events (c)
// Easier Inputs (c)
export default function FormsNormal() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formErrors, setFormErrors] = useState("");
    const [emailError, setEmailError] = useState("");
    const onUsernameChange = (
        event: React.SyntheticEvent<HTMLInputElement>
    ) => {
        const {
            currentTarget: { value },
        } = event;
        setUsername(value);
    };
    const onEmailChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
        const {
            currentTarget: { value },
        } = event;
        setEmailError("");
        setEmail(value);
    };
    const onPasswordChange = (
        event: React.SyntheticEvent<HTMLInputElement>
    ) => {
        const {
            currentTarget: { value },
        } = event;
        setPassword(value);
    };
    const onSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (username === "" || email === "" || password === "") {
            setFormErrors("All fields are required");
        }
        if (!email.includes("@")) {
            setEmailError("email is required");
        }
    };
    return (
        <form onSubmit={onSubmit}>
            <input
                value={username}
                onChange={onUsernameChange}
                type="text"
                placeholder="Username"
                required
                minLength={5}
            />
            <input
                value={email}
                onChange={onEmailChange}
                type="email"
                placeholder="Email"
                required
            />
            {emailError}
            <input
                value={password}
                onChange={onPasswordChange}
                type="password"
                placeholder="Password"
                required
            />
            <input type="submit" value="Create Account" />
        </form>
    );
}
