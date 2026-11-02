import styles from "./UserCard.module.css";
import verifyImg from "./verify-img.png";

function UserCard(props) {
  const { userData } = props;
  const {
    userImgUrl,
    userName,
    userSurname,
    userNick,
    isMale,
    isVerified,
    stats,
  } = userData;
  return (
    <article
      className={styles.userCard}
      style={{
        boxShadow: isMale ? "0px 0px 30px lightblue" : "0px 0px 30px pink",
      }}
    >
      <img className={styles.userImg} src={userImgUrl} alt="" />
      <h2
        className={styles.userName}
        style={{ color: isMale ? "lightblue" : "pink" }}
      >
        {userName} {userSurname}
      </h2>
      <div className={styles.userNick}>
        {userNick}{" "}
        {isVerified && (
          <img className={styles.verifyImg} src={verifyImg} alt="" />
        )}
      </div>
      <div className={styles.statsContainer}>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Tweets</span>
          <span className={styles.statValue}>{stats.tweets}</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Followers</span>
          <span className={styles.statValue}>{stats.followers}</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statLabel}>Following</span>
          <span className={styles.statValue}>{stats.following}</span>
        </div>
      </div>
    </article>
  );
}
export default UserCard;
