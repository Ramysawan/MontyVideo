turnConfig = {
  iceServers: [
    { urls: ["stun:eu-turn5.xirsys.com"] },
    {
      username:
        "_T3EXqyOa9FmJkBhmxycvYAerapOOdWOXRlj8AA5UqOy0wH0_8i1CsMk5tLJnIkfAAAAAGBtW6VyYW15c2F3YW4=",
      credential: "c852d704-9770-11eb-851e-0242ac140004",
      urls: [
        "turn:eu-turn5.xirsys.com:80?transport=udp",
        "turn:eu-turn5.xirsys.com:3478?transport=udp",
        "turn:eu-turn5.xirsys.com:80?transport=tcp",
        "turn:eu-turn5.xirsys.com:3478?transport=tcp",
        "turns:eu-turn5.xirsys.com:443?transport=tcp",
        "turns:eu-turn5.xirsys.com:5349?transport=tcp",
      ],
    },
  ],
};
