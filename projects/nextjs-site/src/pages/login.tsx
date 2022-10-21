import { FormEventHandler, useState } from "react"
import GoogleIcon from "../components/googleIcon"
import styles from "../styles/login.module.css"
import { trpc } from "../utils/trpc";

const Login = () => {
    const { mutate, data, error } = trpc.login.hello.useMutation();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        console.log(email, password)
        mutate({ email, password });
    }

    return (
        <main>
            <div>
                <h1></h1>
            </div>
            <section className={styles.content}>
                <h1 className={styles.title}>Login</h1>

                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" onChange={(e) => setEmail(e.target.value)} className={styles.input} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" onChange={(e) => setPassword(e.target.value)} className={styles.input} />
                    </div>
                    <button className={styles.btn} type="submit">Login</button>
                </form >
                <div className={styles.divider}></div>
                <div className={styles.providers}>
                    <h2>Login With</h2>
                    <div className={styles.providerContainer}>
                        <div className={styles.provider}>
                            <GoogleIcon />
                        </div>
                        <div className={styles.provider}>
                            <GoogleIcon />

                        </div>
                        <div className={styles.provider}>
                            <GoogleIcon />
                        </div>
                    </div>
                </div>
            </section>
            {data?.id && <div className="bg-green-500">
                You are logged in and your user id is <code>{data.id}</code></div>}
            {error?.message && <div className="bg-red-500">{JSON.parse(error.message)[0].message}</div>}
        </main>
    )
}

export default Login;