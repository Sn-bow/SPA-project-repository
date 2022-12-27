import React from 'react';
import styles from './index.module.scss';

const Footer = () => {
	return (
		<div className={styles.footerContainer}>
			<div className={styles.footerBox}>
				<div className={styles.footerLeft}>
					<div className={styles.cscenter}>
						<p className={styles.phone}>1670-9600</p>
						<p className={styles.time}>상담시간 : 오전 10시~오후 5시(토요일, 공휴일 휴무)</p>
						<p className={styles.email}>
							email : spao@eland.co.kr(단체주문 문의) <br /> email : spao_mkt@eland.co.kr(마케팅 협찬 문의)
						</p>
					</div>
					<div className={styles.detailBox}>
						<span className={styles.footerTextDetail}>
							(주)이랜드월드패션사업부 : 사업자등록번호 : 113-85-19030[사업자정보확인] : 통신판매업 신고번호 : 제
							1005-01053호 <br />
							대표이사 : 최운식 <img src="/imgs/bt_copy_line.png" /> 서울특별시 금천구 가산디지털로1로 159 (가산동)
							이랜드가산동사옥 <img src="/imgs/bt_copy_line.png" /> 개인정보 보호책임자 : 최운식 <br /> 사옥 주소로
							상품을 발송하시면 교환 ・ 환불은 사이트 내에서 신청해주시기 바랍니다.
						</span>
					</div>
					<div className="btn_sns">
						<a href="https://www.facebook.com/SPAOSTORY" target="_blank" rel="noreferrer">
							<img src="/imgs/bt_sns_face.png" alt="facebook" className={styles.facebook} />
						</a>
						<a href="https://www.spao.com/morenvyimg/bt_sns_insta.png" target="_blank" rel="noreferrer">
							<img src="/imgs/bt_sns_insta.png" alt="instagram" className={styles.instagram} />
						</a>
						<a href="https://www.youtube.com/user/SPAOKOREA" target="_blank" rel="noreferrer">
							<img src="/imgs/bt_sns_you.png" alt="youtube" className={styles.youtube} />
						</a>
						<a href="https://blog.naver.com/spaostory" target="_blank" rel="noreferrer">
							<img src="/imgs/bt_sns_blog.png" alt="blog" className={styles.blog} />
						</a>
						<a href="https://post.naver.com/spaostory" target="_blank" rel="noreferrer">
							<img src="/imgs/bt_sns_post.png" alt="post" className={styles.post} />
						</a>
					</div>
				</div>

				<div className={styles.rightSection}>
					<ul className={styles.intro}>
						<li>브랜드소개</li>
						<li>오프라인 매장안내</li>
					</ul>
					<ul className={styles.privacyInfo}>
						<li className={styles.privacy}>개인정보 처리방침</li>
						<li>약관안내</li>
						<li>윤리경영</li>
					</ul>
					<ul className={styles.notice}>
						<li>공지사항</li>
						<li>회원혜택</li>
						<li>채용정보 및 인사제도</li>
						<li>자주묻는질문 FAQ</li>
					</ul>
				</div>
			</div>

			<div className={styles.copyrightText}>
				<span className={styles.copyright}>Copyright © 스파오닷컴 All Right Reserved.</span>
			</div>
		</div>
	);
};

export default Footer;
