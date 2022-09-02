# Admin Custom template

## Description

This is a custom admin template.
- Core UI
- Antd Design
- Redux
- Redux Toolkit
- Axios
- Typescript
- React Toastify

## Installation

```bash 
npx create-react-app app_name --template boanergests
```

## Configuration Changes
- For local development, rename ***.env.example.local*** to ***.env.local***. Which is found in the directory ***.env***.
- For production, rename ***.env.example.production*** to ***.env.production***. Which is found in the directory ***.env***.
  
### Environment Variables
Which is contained in the file ***.env***  has the following variables:
    
```bash
PORT=3000
CHOKIDAR_USEPOLLING=true
SKIP_PREFLIGHT_CHECK=true

SERVER_URL=http://localhost:5000
CLIENT_URL=http://localhost:3000
```

Optionally you can change the variable to suit your needs

## Features
- Popup notification. Which involves any of the following:
    - Antd Notification
    - MUI Notification
    - React Toastify
  The notification can be dispatched using the following:
  Example.
  ```bash
    dispatch(
        showNotification({
        type: 'success',
        message: 'Success',
        description: 'This is a success message',
        })
    );
    ```
    A notification may contain the following data:
    ```bash
    INotificationState {
        message?: string
        type: "info" | "success" | "error" | "warning" | TypeOptions
        theme?: 'light' | 'dark'
        position?: 'top-right'
        autoClose?: number
        hideProgressBar?: boolean
        component?: 'antd' | 'react-toastify'
        description?: string
    }
    ```