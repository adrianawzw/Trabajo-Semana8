router.post('/login', async (req, res) => {
   const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET,
   );

   res.json({ token, user });
});