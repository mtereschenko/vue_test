## Console

* Open a new terminal window and CD to your projects directory
  ```bash
  cd ${PROJECT_PATH}/environment
  ```

* This command updates the environment or your package.json changes.
  ```bash
  make build
  ```

* This command runs the environment. 
  ```bash
  make start
  ```

After that your project will be able to visit by `http://${PROJECT_NAME}.localhost`. By default, it's `http://vue_test_project.localhost`.

* This command "teleports" you to the command shell where you can execute **npm**, **node**, etc. commands.
  ```bash
  make shell
  ```
