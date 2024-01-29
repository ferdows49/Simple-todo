"use client";

import React, {useEffect, useState} from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";


interface Todo {
    id: number,
    title: string,
    isCompleted: boolean
}

export default function Items() {
    const [checked, setChecked] = useState([0]);
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("http://127.0.0.1:8000/api/tasks/");
                const data = await res.json();
                console.log(data);
                setTodos(data?.map((item: any) => ({
                    id: item?.id,
                    title: item?.title,
                    isCompleted: item?.is_completed
                })));
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);
    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    const data = [
        {
            id: 1,
            name: "study",
            isComplited: false,
        },
        {
            id: 2,
            name: "work",
            isComplited: false,
        },
        {
            id: 3,
            name: "play",
            isComplited: true,
        },
        {
            id: 4,
            name: "watch movie",
            isComplited: true,
        },
    ];

    return (
        <div className="p-4 overflow-auto">
            <List sx={{width: "100%", bgcolor: "background.paper"}}>
                {todos?.map((value) => {
                    const labelId = `checkbox-list-label-${value}`;

                    // @ts-ignore
                    return (
                        <ListItem
                            key={value?.id}
                            secondaryAction={
                                <IconButton edge="end" aria-label="deleteF" color="error">
                                    <DeleteOutlineOutlinedIcon/>
                                </IconButton>
                            }
                            disablePadding
                        >
                            <ListItemButton
                                role={undefined}
                                // onClick={handleToggle(value)}
                                dense
                            >
                                <ListItemIcon>
                                    <Checkbox
                                        edge="start"
                                        // checked={checked.indexOf(value) !== -1}
                                        tabIndex={-1}
                                        disableRipple
                                        inputProps={{"aria-labelledby": labelId}}
                                    />
                                </ListItemIcon>
                                <ListItemText
                                    id={labelId}
                                    primary={value?.title}
                                    className={`${
                                        value?.isCompleted && "line-through opacity-50"
                                    } `}
                                />
                            </ListItemButton>
                        </ListItem>
                    );
                })}
            </List>
        </div>
    );
}
