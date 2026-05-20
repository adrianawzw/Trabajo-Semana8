const role = "SUPER_ADMIN";
router.post('/authlogin', async (req, res) => {
   const token = jwt.sign(
      { userId: user.id, role: user.role },
      process.env.JWT_SECRET,
   );

   res.json({ token, user });
});