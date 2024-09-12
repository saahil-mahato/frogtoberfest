<h1 align="center">Frogtoberfest</h1>
<p align="center">Web app to track your progress for Frogtoberfest.</p>
<p align="center">:point_right: <a href="https://frogtoberfest.lftechnology.com">https://frogtoberfest.lftechnology.com</a></p>

## Requirements

- Node v20+

## Running the App

- [Generate a GitHub personal access token](https://github.com/settings/tokens/new?scopes=&description=Frogtoberfest) to ensure you don't get rate limited as often.

- Create a `.env` file using `.env.example`.

  ```bash
  $ cp .env.example .env
  ```

- Set your GitHub token as `REACT_APP_GITHUB_TOKEN` environment variable in `.env`:

- Install dependencies and start.

  ```bash
  $ yarn
  $ yarn start
  ```

## License

Redistributed and sub-licensed under [MIT License](LICENSE) © 2019 - present by [Leapfrog Technology](https://github.com/leapfrogtechnology).

Originally distributed and licensed under [MIT License](https://github.com/jenkoian/hacktoberfest-checker/LICENSE) by [Ian Jenkins](https://github.com/jenkoian). Check the original source code [here](https://github.com/jenkoian/hacktoberfest-checker).

Happy Hacking! 🎃 🐸
